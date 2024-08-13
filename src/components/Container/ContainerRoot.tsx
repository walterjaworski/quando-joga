import { ReactNode } from "react"

interface ContainerRootProps {
  children: ReactNode
}

export function ContainerRoot({ children }: ContainerRootProps) {
  return (
    <div className="container mx-auto p-4 bg-slate-200">
      {children}
    </div>
  )
}
