import Link from '@/components/Link'
import { generateFolderNavigation } from '@/utils/folderUtils'

export default function FolderNavigation() {
  const folders = generateFolderNavigation()

  if (folders.length === 0) {
    return null
  }

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">文章分类</h3>
      <ul className="space-y-2">
        {folders.map((folder) => (
          <li key={folder.path}>
            <Link
              href={`/blog/${folder.path}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center justify-between"
            >
              <span>{folder.title}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">({folder.postCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
