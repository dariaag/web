import { baseSepolia } from "viem/chains";
import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { createClient, createPublicClient, http } from "viem";
import { paymasterActionsEip7677 } from "permissionless/experimental";
import { pimlicoPaymasterActions } from 'permissionless/actions/pimlico';
import { createPimlicoPaymasterClient } from 'permissionless/clients/pimlico'



export const client = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

const paymasterService = process.env.PAYMASTER_SERVICE_URL!;

export const paymasterClient = createClient({
    chain: baseSepolia,
    transport: http(paymasterService),
  }).extend(paymasterActionsEip7677(ENTRYPOINT_ADDRESS_V06));
