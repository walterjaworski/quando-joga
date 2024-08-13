import { ReactNode } from "react"

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <div className="bg-white flex items-center p-4 gap-4">
      {children}
    </div>
  )
}
