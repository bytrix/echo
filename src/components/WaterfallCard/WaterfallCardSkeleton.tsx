import { Skeleton } from 'baseui/skeleton'
import React from 'react'
import { CardAction, User } from './styles'
const WaterfallCardSkeleton = () => {
    return (
        <>
            {/* CardImage */}
            <Skeleton
                width='100%'
                height={`${Math.random() * 150 + 150}px`}
                overrides={{
                    Root: {
                        style: {
                            marginBottom: '6px'
                        }
                    }
                }}
            />
            {/* CardTitle */}
            <Skeleton
                width='170px'
                height='24px'
            />
            <CardAction>
                <User>
                    <Skeleton
                        width='24px'
                        height='24px'
                        overrides={{
                            Root: {
                                style: {
                                    borderRadius: '100%',
                                    display: 'inline-block'
                                }
                            }
                        }}
                    />
                    <Skeleton
                        width='90px'
                        height='24px'
                        overrides={{
                            Root: {
                                style: {
                                    marginLeft: '6px',
                                    display: 'inline-block'
                                }
                            }
                        }}
                    />
                </User>
                <Skeleton
                    width='24px'
                    height='24px'
                    overrides={{
                        Root: {
                            style: {
                                marginRight: '6px'
                            }
                        }
                    }}
                />
                <Skeleton
                    width='24px'
                    height='24px'
                />
            </CardAction>
        </>
    )
}

export default WaterfallCardSkeleton