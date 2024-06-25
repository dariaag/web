import { useMemo, useState } from 'react';
import { useAccount } from 'wagmi';
import { useCapabilities, useWriteContracts } from 'wagmi/experimental';
import {RegistrarControllerABI} from "../../constants"
import { Abi } from 'viem';


export function Paymaster() {
    const account = useAccount();
    const[id, setId] = useState<string | undefined>(undefined);
    const { writeContracts } = useWriteContracts();
    const {data: availableCapacities} = useCapabilities({
        account: account.address
    });
    const capabilities = useMemo(() => {
        if (!account.isConnected || !account.chainId || !availableCapacities) {
            return {};
        }
        const chainCapabilities = availableCapacities[account.chainId];
        if (chainCapabilities["paymasterService"] && chainCapabilities["paymasterService"].supported) {
            return {
                paymasterService: {
                    url: `${document.location.origin}/api/paymaster`
                },
            };
        }
        return {};
    }, [availableCapacities, account.chainId]);
    return (
        <div>
            <h2>Mint your basename!</h2>
            <button 
            onClick={() => {
                writeContracts({
                    contracts: [
                        {
                            address: "0x22", // change this
                            abi: RegistrarControllerABI as Abi, // fix error
                            functionName: "register",
                            args: [
                                {
                                    name: "Name",
                                    owner: account.address,
                                    duration: 86400,
                                    resolver: "0x0",
                                    data: [],
                                    reverseRecord: true
                                }
                            ] // get args
                        }
                    ], capabilities
                });
                
            }}>
                Mint
                </button>
        </div>

    )

}
