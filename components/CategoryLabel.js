import Link from 'next/link'

export default function CategoryLabel({children}) {

  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'cyan',
    Python: 'green',
    PHP: 'purple',
    Laravel: 'red',
    Flutter: 'blue'
  }

  return (
    <div className={`px-2 py-1 bg-${colorKey[children]}-500 text-gray-100 font-bold rounded`}>
    
      <Link href={`/blog/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  )
}
