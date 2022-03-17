import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEffect } from "react";
import { injected } from "../connectors";

export const useActiveWeb3 = (): boolean => {
  /**
   * This activates the web3-react provider
   */
  const { activate, active } = useWeb3React<Web3Provider>();
  useEffect(() => {
    if (!active) {
      activate(injected).then(() => {
        console.info('Activated Connection');
      });
    }
  }, [activate, active]);
  return active;
};