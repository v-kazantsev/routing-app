import './style.css'

interface ContainerProps {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <div className='main-container'>
    {children}
  </div>
)

export default Container
