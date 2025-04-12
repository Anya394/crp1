import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./ModalRadix.css"
import { ButtonAntd } from '../Button/ButtonAntD';

export const ModalRadix = () => {
    return (
        <Dialog.Root>
            {/* Кнопка открытия */}
            <Dialog.Trigger className="shadow-lg  hover:shadow-md bg-black">
                <button className="">Click me</button>
            </Dialog.Trigger>

            {/* Оверлей */}
            <Dialog.Portal >
                <Dialog.Overlay className="fixed inset-0 bg-black/25" />
                
                {/* Контент модалки */}
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg w-[90vw] h-[15vw] max-w-md content-center">
                <Dialog.Title className="flex justify-center">Title</Dialog.Title>
                <div className="flex justify-center">Content</div>
                <div className="flex justify-center">
					<Dialog.Close asChild>
						<button >
							<ButtonAntd />
						</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button
						className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
						aria-label="Close">
						    <Cross2Icon />
					</button>
				</Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};