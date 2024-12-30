import { useAccount, useChainId, useConnections, useDisconnect } from 'wagmi';

export function useConnection() {
  const { address, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();

  const connectors = useConnections();
  const connectedWallet = connectors[0];
  const isConnected = !!address && !!connector && !!connectedWallet;

  if (isConnected) {
    return {
      connector,
      address: address as `0x${string}`,
      isConnected: true,
      connectedWallet,
      chainId,
      disconnect,
    } as const;
  }

  return {
    connector: undefined,
    address: undefined,
    isConnected: false,
    connectedWallet,
    chainId: undefined,
    disconnect,
  } as const;
}
