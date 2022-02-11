import { FC } from 'react'

export const Playground: FC = () => {
  return (
    <div className="h-[800px] my-8 relative mx-[-50vw] right-1/2 left-1/2 w-screen px-5">
      <iframe
        className="w-full h-full"
        src="https://stackblitz.com/edit/github-jmeqhv?devtoolsheight=33&embed=1&file=posts/post-01.md"
      />
    </div>
  )
}
