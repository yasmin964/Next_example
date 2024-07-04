import { NextPageContext } from 'next';

interface ErrorProps {
    statusCode: number;
  }
const Error = ({ statusCode }: ErrorProps) => {
    return (
      <div>
        <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
      </div>
    );
  };
  
  Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
    const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
    return { statusCode };
  };

  export default Error;
  