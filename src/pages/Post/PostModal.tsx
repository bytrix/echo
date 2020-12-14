import { Modal, ModalBody } from "baseui/modal"
import { inject, observer } from "mobx-react"
import React, { createRef } from "react"
import PostView from "./PostView"

const PostModal = (props: any) => {
    const { PostModalStore } = props.store
    const modalRef = createRef<any>()
    return (
        <Modal
            isOpen={PostModalStore.isOpen}
            ref={modalRef}
            focusLock={true}
            size='auto'
            onClose={() => {
                PostModalStore.close()
            }}
        >
            <ModalBody>
                <PostView />
            </ModalBody>
        </Modal>
    )
}

export default inject('store')(observer(PostModal))