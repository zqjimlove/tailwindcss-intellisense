import * as fs from 'fs'
import {
  CachedInputFileSystem,
  ResolverFactory,
  Resolver,
  ResolveOptions,
} from 'enhanced-resolve'

export function createResolver(options: Partial<ResolveOptions> = {}): Resolver {
  return ResolverFactory.createResolver({
    // @ts-ignore
    fileSystem: new CachedInputFileSystem(fs, 4000),
    useSyncFileSystemCalls: true,
    conditionNames: ['node', 'require'],
    ...options,
  })
}
