import React from 'react'

const Footer = () => {
  return (
  <footer className="mt-20 py-8 border-t mx-auto w-full max-w-[1240px]">
        <div className="max-w-6xl mx-auto px-6 text-sm opacity-70 flex items-center justify-between">
          <div>© {new Date().getFullYear()} - SurfingNerd .inc</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/surfingnerdinc">GitHub</a>
            <a href="https://www.linkedin.com/in/mdubinski/">LinkedIn</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer