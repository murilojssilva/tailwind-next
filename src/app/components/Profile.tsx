import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/murilojssilva.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Murilo Silva
        </span>
        <span className="truncate text-sm text-zinc-500">
          murilojssilva@outlook.com
        </span>
      </div>
      <button type="button" className="hover;bg-zinc-50 ml-auto rounded-md p-2">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
