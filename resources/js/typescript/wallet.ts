import { Account, Server, ServerApi } from "stellar-sdk";

const _ = require("lodash");

export const Wallet = {
    Livewire: null,
    init: ({ Livewire }: any) => {
        console.log({ Livewire });
        Wallet.Livewire = Livewire;
        Livewire.on("pageLoaded", Wallet.pageLoaded);
        //Hide the loader
    },

    pageLoaded: (params: any) => {
        console.log({ params });
        const { account, network } = params;
        const server = new Server(network);

        server
            .accounts()
            .accountId(account)
            .cursor("now")
            .stream({ onmessage: Wallet.accountUpdate });
    },

    accountUpdate: (account: ServerApi.AccountRecord) => {
        console.log({ account });
        Wallet.Livewire.emit("accountUpdate", account.balances);
    },
};
