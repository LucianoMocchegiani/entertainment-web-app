"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

function Modal({patchName='modal', children}) {
    const searchParams = useSearchParams();
    const modal = searchParams.get(patchName);
    const pathname = usePathname();

    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white p-4">
                        <div className="w-full flex justify-end m-2">
                            <Link href={pathname}>
                                <button type="button" className="bg-black text-white p-2">
                                    <Icon path={mdiClose} size={1} />
                                </button>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center w-full bg-black">
                            {children}
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

export default Modal;