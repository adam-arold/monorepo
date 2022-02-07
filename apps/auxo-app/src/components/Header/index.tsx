import { useWeb3React } from "@web3-react/core";
import logoFile from '../../assets/icons/logo.png'
import { FaBell } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import WalletModal from "./WalletModal";
import { useEffect, useState } from "react";
import { chainMap } from "../../utils/networks";
import ErrorMessage from "./ErrorMessage";
import { useAppSelector } from "../../hooks";
import { useWeb3Cache } from "../../hooks/useCachedWeb3";
import { useEagerConnect, useInactiveListener } from "../../hooks/useWeb3";
import { network } from "../../connectors";
import { HEADER_HEIGHT } from "../../constants";
import { FTMLogo } from "../../assets/icons/logos";
import StyledButton from "../UI/button";

const trimAccount = (account: string): string => {
  return account.slice(0, 6) + '...' + account.slice(38)
}

const useFallBack = () => {
  const { active, activate } = useWeb3React()
  const { chainId } = useWeb3Cache();
  useEffect(() => {
    if (!active) activate(network)
  }, [active, chainId, activate])
}

const useConnectedWallet = () => {
  const { connector } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = useState<any>()
  const triedEager = useEagerConnect()

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  useFallBack();

  useInactiveListener(!triedEager ||!!activatingConnector);
}


const Web3Status = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const { chainId } = useWeb3Cache()
  const { active, account } = useWeb3React();
  
  useConnectedWallet();

  const chain = chainId && chainMap[chainId];
  return (
  <div className="
    flex
    items-center
    justify-evenly
    ">
    { show && <WalletModal setShow={setShow} />}
    { chainId &&
      <div className="flex items-center shadow-md rounded-md px-2">
        <FTMLogo colors={{ primary: 'white', bg: 'purple' }} height={5} />
        <p className={`
          font-bold
          text-sm
          rounded-xl
          py-1
          px-3
          ${chain ? 'text-black' : 'text-red-600'}
          bg-${chain ? chain.color : ''}
        `}>
          { chain ? chain.name : 'Network Not Supported' }
        </p>
      </div>
    }
    <StyledButton className="mx-5 text-xs" onClick={() => {
      setShow(true)
    }}>
      { active && account
        ? trimAccount(account)
        : 'Connect Web3' }
    </StyledButton>
    <button className="rounded-md shadow-md p-2 relative">
      <FaBell color="purple"/>
      <div className="bg-red-700 rounded-full h-3 w-3 absolute -top-0 -right-1"/>
    </button>
  </div>
  )
}

const MobileMenu = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const items = ['Connect Wallet', 'FANTOM'];
  return (
    <>
    <GiHamburgerMenu onClick={() => setShowMobileMenu(!showMobileMenu)}/>
    { showMobileMenu && <section className="
      absolute
      top-10
      border-2
      border-grey-200
      shadow-md
      px-3
      bg-white
      rounded-md
      w-48
    ">
      <ul>
        {items.map(i => (<div key={i} className="text-right my-5">{i}</div>))}
      </ul>
    </section>
    }
    </>
  )
}

const Header = () => {
  // const triedEager = useEagerConnect();
  const [showError, setShowError] = useState(false)
  const [clicked, setClicked] = useState(false)
  const error = useAppSelector(state => state.app.error);
  return (
    <>
    <header
      className={`
      flex
      items-center
      justify-between
      px-5
      my-2
      absolute w-full
      top-0
      h-${HEADER_HEIGHT}
      z-10
      pt-1
      `}
    >
      <div className="flex justify-start items-center">
        {/* <img src={logoFile} alt="piedao-logo" className="ml-2 w-14 flex-grow-1 basis-0"/> */}
        <p className="font-extrabold text-lg">AUXO</p>
      </div>
      <div className="hidden md:flex justify-end items-center">
        <Web3Status />
      </div>
      <div className="flex md:hidden justify-end">
        <MobileMenu />
      </div>      
      {/* <button
        onMouseEnter={() => setShowError(true)}
        onMouseLeave={() => {
          if (!clicked) setShowError(false)
        }}
        onClick={() => {
          setClicked(true)
          setShowError(true)
        }}
        className="
          bg-red-700
          text-white
          rounded-xl
          py-1
          px-2
          font-extrabold
          mr-2
          text-center
        "
        >Error</button>       */}
      </header>
      {/* {showError &&  */}
      <div className="fixed top-14 flex justify-center w-full z-10">
        <ErrorMessage setClicked={setClicked} setShowError={setShowError}/>
      </div>
    </>
  )
};
export default Header;