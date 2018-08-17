import React from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'

// Ported from the amazing codepen by Alexei Popkov.
// https://codepen.io/Reystleen/pen/oydqxz

const AnotherGridLayout = () => (
  <Container>
    {/* Heads up! We apply there some custom styling, you usually will not need it. */}
    <style>{`
      html, body {
        background-color: #efeae3 !important;
      }

      #bottomBox {
        height: 700px;
      }

      #sideColumn {
        height: 800px;
      }

      p {
        align-content: center;
        background-color: #c9a674;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }

      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}</style>

    <Header as='h2' icon inverted textAlign='center'>
      Hey hey hey
    </Header>
    <Divider />

    <Grid relaxed>
      <Grid.Row>
        <Grid.Column width={4}>
          <p>
            <span id='sideColumn'>Four</span>
          </p>
        </Grid.Column>
        <Grid.Column width={12}>
          <p>
            <span id='topBox'>Eight</span>
          </p>
          <p>
            <span id='bottomBox'>
            </span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default AnotherGridLayout
