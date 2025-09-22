import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import ListLayout from './ListLayout'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface FolderIndexLayoutProps {
  content: CoreContent<Blog>
  folderPosts: CoreContent<Blog>[]
  folderPath: string
  title: string
}

export default function FolderIndexLayout({
  content,
  folderPosts,
  folderPath,
  title,
}: FolderIndexLayoutProps) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* 页面标题 */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {title}
        </h1>
      </div>

      {/* _index.mdx 的内容 */}
      <div className="prose max-w-none pt-6 pb-8">
        <MDXLayoutRenderer code={content.body.code} components={components} />
      </div>

      {/* 分隔线 */}
      <hr className="border-gray-200 dark:border-gray-700" />

      {/* 该文件夹下的文章列表 */}
      <div className="pt-6 pb-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
          该分类下的文章 ({folderPosts.length})
        </h2>
        <ListLayout posts={folderPosts} title="" initialDisplayPosts={folderPosts} />
      </div>
    </div>
  )
}
