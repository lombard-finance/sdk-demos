import { Stack, Typography } from '@mui/material';
import { Layout } from 'modules/common/components/Layout';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { StakeStatuses } from './components/StakeStatuses';
import { StakeTabs } from './components/StakeTabs';

const tabs = [
  { value: '/stake', label: 'Deposit' },
  { value: '/stake/stake-and-bake', label: 'Deposit into DeFi' },
];

export function Stake(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
  };

  return (
    <Layout
      left={
        <Stack gap={4}>
          <StakeTabs
            value={location.pathname}
            onChange={handleTabChange}
            options={tabs}
          />
          <Outlet />
        </Stack>
      }
      right={
        <StakeStatuses
          content={
            <>
              <Typography variant="h6">Stakes</Typography>
              <Typography color="text.secondary">
                Status of BTC stake.
              </Typography>
            </>
          }
        />
      }
    />
  );
}
