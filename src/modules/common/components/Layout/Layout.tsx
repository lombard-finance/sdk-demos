import { Container } from '@mui/material';

import { Stack } from '@mui/material';
import { Header } from '../Header';
import { Footer } from './Footer';

interface LayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

export function Layout({ left, right }: LayoutProps): JSX.Element {
  return (
    <Stack direction="column" justifyContent="space-between">
      <Stack
        flex="1"
        direction={{
          xs: 'column',
          lg: 'row',
        }}
      >
        <Stack
          height="100vh"
          flex={{
            xs: 0,
            lg: 1,
          }}
          sx={{ backgroundColor: 'background.default' }}
        >
          <Header />
          <Container maxWidth="sm" sx={{ py: 5, height: '100%' }}>
            {left}
          </Container>
          <Footer />
        </Stack>

        <Stack
          maxHeight="100vh"
          flex={1}
          sx={{ backgroundColor: 'customMain.100', overflowY: 'auto' }}
        >
          <Container
            maxWidth="sm"
            sx={{
              pt: {
                xs: 5,
                lg: 17.5,
              },
              pb: 5,
            }}
          >
            {right}
          </Container>
        </Stack>
      </Stack>
    </Stack>
  );
}
