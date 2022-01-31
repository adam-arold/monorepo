import { NetworkDetails } from "../../utils/networks";

/**
 * Initialise a vault with basic information
 */
interface BasicVaultInformation {
  name: string;
  address: string;
  description: string;
  network: NetworkDetails;
  symbol: string;
}

// store the raw value of any balances as a string but provide a human readable number
export type Balance = {
  label: number;
  value: string;
} 

export interface VaultToken {
  address: string;
  decimals: number;
}

export interface VaultStats {
  currentAPY: number;
  deposits: Balance;
  lastHarvest: number;
  batchBurnRound: number;
}

export interface UserBalances {
  wallet: Balance;
  vaultUnderlying: Balance;
  vault: Balance;
  allowance: Balance;
  batchBurn: {
    round: number;
    shares: Balance;
    available: Balance;
  }
}

export interface UserWithdrawals {

}

/**
 * Additional Vault fields are populated at runtime, thus they may be optional
 */
export interface Vault extends BasicVaultInformation {
  token: VaultToken;
  stats?: VaultStats;
  userBalances?: UserBalances
  withdrawals?: UserWithdrawals
}

export interface VaultState {
  vaults: Vault[];
  selected: null | string;
  isLoading: boolean;
}

export type VaultOnChainData = Pick<Vault, 'address' | 'stats' | 'token'>;
export type UserBalanceOnChainData = Pick<Vault, 'address' | 'userBalances'>;
