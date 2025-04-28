import React, { useState } from 'react'

const About = () => {
  const [open, setOpen] = useState(false)
  return (

    <section>

      <sl-dialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <sl-button slot="footer" variant="primary" onClick={() => setOpen(false)}>
          Close
        </sl-button>
      </sl-dialog>

      <sl-button onClick={() => setOpen(true)}>Open Dialog</sl-button>

    </section>

  )
}

export default About