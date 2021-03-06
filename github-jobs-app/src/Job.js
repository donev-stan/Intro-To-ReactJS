import React from 'react'
import { Card, Badge } from 'react-bootstrap'

export default function Job({ job }) {
  return (
    <Card>
        <Card.Body>
            <div className='justify-content-between'>
                <div>
                    <Card.Title>
                        { job.title } - <span className='text-muted font-weight-light'> { job.company } </span>
                    </Card.Title>

                    <Card.Subtitle className='text-muted mb-2'>
                        {new Date(job.created_at).toLocaleDateString()}
                    </Card.Subtitle>

                    <Badge variant="secondary" className='mr-2'>{job.type}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>

                </div>
            </div>
        </Card.Body>
    </Card>
  )
}
