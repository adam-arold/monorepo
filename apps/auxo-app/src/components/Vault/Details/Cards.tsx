import { Strategy, Vault } from "../../../store/vault/Vault"
import { chainMap } from "../../../utils/networks"
import { Divider } from "../../UI/divider";
import ExternalUrl from "../../UI/url";
import { Disclosure, Transition } from '@headlessui/react'
import { BiChevronRight } from "react-icons/bi";


const Card = ({ children, title }: { children?: React.ReactNode, title?: string }): JSX.Element => (
    <div className="
      p-5 rounded-lg shadow-md bg-white text-left text-xs sm:text-sm text-gray-600">
    <h2 className="font-extrabold text-lg sm:text-xl mb-2">{title}</h2>
      { children }
    </div>
)

export const VaultStrategyDetails = ({ strategy }: { strategy: Strategy }): JSX.Element => {
  return (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full font-bold 
                ">
                <span className="text-left">{strategy.name}</span>
                <BiChevronRight
                  className={`${
                    open ? 'transform rotate-90' : ''
                  } w-5 h-5 text-baby-blue-dark`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
              <Disclosure.Panel className="my-1 ">
                <div key={strategy.name} className="flex justify-between my-1 pr-2">
                    <p className="italic">Allocation</p>
                    <p className="font-bold text-return-100">{strategy.allocation * 100} %</p>
                </div>
                <div className="px-5 border-l-2 border-l-baby-blue-light">                  
                    <p>{strategy.description}</p>
                        <p className="font-bold my-1">Links</p>
                            <div className="px-5 border-l-2 border-l-baby-blue-light">
                            {

                                strategy.links.map((link, id) => (
                                <div key={id}>
                                    <ExternalUrl to={link.to}>
                                    <p className="text-baby-blue-dark underline">{link.name}</p>
                                    </ExternalUrl>
                                </div>
                            ))
                            }
                    </div>
                </div>
              </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
  )
}

export const VaultStrategiesCard = ({ vault }: { vault: Vault | undefined }) => {
    return (
        <Card title="Strategy Details">
        {
            vault && vault.strategies.map((strat, id) => 
                <div key={id} className="my-5" >
                    <VaultStrategyDetails strategy={strat} />
                </div>
            )
        }      
        </Card>
    )
} 

export const VaultExtendedInformationCard = ({ vault }: { vault: Vault | undefined }): JSX.Element => {
    const chainId = vault?.network.chainId;
    const url = chainId && `${chainMap[chainId].blockExplorer}/address/${vault?.address}`;    
    return (
        <Card title='About this Vault'>
            {
                vault ? vault.description :
                <p>We couldn't find any information about this vault - is the url correct?</p>
            }
            <Divider className="my-3"/>            
            {
                url &&
                <div className="flex justify-between w-full flex-wrap mb-2">
                    <p className="font-bold">Contract:</p>
                        <ExternalUrl to={url}>
                            <p className="truncate overflow-hidden">
                                <span className="text-baby-blue-dark underline mr-1 truncate overflow-hidden">{vault?.address}</span>
                            </p>
                        </ExternalUrl>
                </div>
            }            

        </Card>
    )
}
