import { useCallback } from "react"

interface ButtonProps {
  children: React.ReactNode
}

export function Button({children}: ButtonProps) {
  const handleClick = useCallback(() => {
    alert("Holi c:");
  }, []);

  return (
    <button onClick={handleClick} className="text-white bg-slate-700 px-4 py-2 rounded ">
      {children}
    </button>
  )
}