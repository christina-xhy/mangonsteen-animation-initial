import { useRouteError } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
  const error: any = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Soory,an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message} </i>
      </p>
    </div>
  )
}
