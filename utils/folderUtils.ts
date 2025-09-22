import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

/**
 * 获取文件夹下的所有文章
 */
export function getFolderPosts(folderPath: string): Blog[] {
  return allBlogs.filter((post) => 
    post._raw.flattenedPath.startsWith(folderPath) && 
    !post.isFolderIndex &&
    post._raw.flattenedPath !== folderPath
  )
}

/**
 * 获取所有文件夹索引页面
 */
export function getAllFolderIndexes(): Blog[] {
  return allBlogs.filter(post => post.isFolderIndex)
}

/**
 * 根据路径获取文件夹索引页面
 */
export function getFolderIndexByPath(path: string): Blog | undefined {
  return allBlogs.find(post => 
    post.isFolderIndex && post.folderPath === path
  )
}

/**
 * 生成文件夹导航数据
 */
export function generateFolderNavigation() {
  const folderIndexes = getAllFolderIndexes()
  return folderIndexes.map(folder => ({
    title: folder.title,
    path: folder.folderPath,
    summary: folder.summary,
    postCount: getFolderPosts(folder.folderPath).length
  }))
}
