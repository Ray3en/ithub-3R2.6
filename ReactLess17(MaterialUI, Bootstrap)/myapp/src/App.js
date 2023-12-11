import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import {Menu} from '@mui/icons-material'
function App() {
  return (
    <div>
      <AppBar >
        <Toolbar>
          <IconButton aria-label='menu'>
            <Menu/>
          </IconButton>
          <Typography sx={{flexGrow: 1}}>Header</Typography>
          <Box sx={{display: 'flex', gap: '5px'}}>
            <Button variant='contained' color='success'>Auth</Button>
            <Button variant='contained' color='secondary'>Register</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box m={10}>
        <Accordion>
            <AccordionSummary>To
              <Typography>Element 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et deserunt accusantium similique doloribus optio modi voluptatum maxime, placeat voluptates sapiente. Molestiae eligendi beatae sunt itaque debitis reprehenderit quasi obcaecati.
              </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
              <Typography>Element 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et deserunt accusantium similique doloribus optio modi voluptatum maxime, placeat voluptates sapiente. Molestiae eligendi beatae sunt itaque debitis reprehenderit quasi obcaecati.
              </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>
              <Typography>Element 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et deserunt accusantium similique doloribus optio modi voluptatum maxime, placeat voluptates sapiente. Molestiae eligendi beatae sunt itaque debitis reprehenderit quasi obcaecati.
              </Typography>
            </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default App;
