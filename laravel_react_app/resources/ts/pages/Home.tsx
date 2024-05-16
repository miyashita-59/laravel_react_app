import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card } from '@mui/material';

export default function Home() {
    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained" href={`/index`}>TODOリストに遷移</Button>
            </Card>
        </div>
    );
}

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);