import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      < Footer />
    </div>
  )
}

export default Layout