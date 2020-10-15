<?php

namespace App\Http\Livewire\Test;

use Livewire\Component;

class Event extends Component
{
    public $listeners = ['accountUpdate'];

    public function render()
    {
        return view('livewire.test.event');
    }

    public function pageLoaded(){
        $param = [
            'account' => 'GAUSVJ4WEUTIRRY5K7ZX6XBGZ45GKZZ4IIGG7ER4F6OAGEPFYSWUG4MI',
            'network' => env("STELLAR_NETWORK")
        ];
        $this->emit('pageLoaded', $param);
    }

    public function accountUpdate($balances){
        logger("Wallet balances", $balances);
    }
}
