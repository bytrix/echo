import { Skeleton } from 'baseui/skeleton'
import React from 'react'
import { CardAction, User } from './styles'
const WaterfallCardSkeleton = () => {
    return (
        <div style={{
            // backgroundColor: 'red',
            breakInside: 'avoid',
            paddingTop: 10,
            paddingLeft: 10
            // padding: 10
        }}>
            {/* CardImage */}
            <Skeleton
                width='100%'
                // width='220px'
                height={`${Math.random() * 150 + 150}px`}
                overrides={{
                    Root: {
                        style: {
                            marginBottom: '8px',
                            // width: '100%'
                            // marginLeft: '6px'
                            // padding: '10px',
                            // padding: '10px'
                            // margin: '0px'
                        }
                    }
                }}
            />
            {/* CardTitle */}
            <Skeleton
                width='170px'
                height='24px'
                overrides={{
                    Root: {
                        style: {
                            marginBottom: '8px'
                        }
                    }
                }}
            />
            <CardAction
                style={{
                    marginBottom: 8
                }}
            >
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
                                marginRight: '8px'
                            }
                        }
                    }}
                />
                <Skeleton
                    width='24px'
                    height='24px'
                />
            </CardAction>
        </div>
    )
}

export default WaterfallCardSkeleton