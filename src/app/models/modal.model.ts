interface ModalType {
    complete: "Buy" | "Sell" | "Withdraw";
    error: "Buy" | "Sell";
    wraning: "Network";
}

type Fnc = (value: unknown)=>void;

export interface Modal {
    modalType: Partial<ModalType>;
    detail?: string;
    accep: Fnc;
    cancel: Fnc;
}

const i: Modal = {
    modalType: {
        complete: "Buy",
    },
    accep: (value: unknown) => console.log(value),
    cancel: (value: unknown) => console.log(value),
}