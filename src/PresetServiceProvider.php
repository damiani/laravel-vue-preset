<?php

namespace Damiani\LaravelPreset;

use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\Console\PresetCommand;

class PresetServiceProvider extends ServiceProvider
{
    public function boot()
    {
        PresetCommand::macro('damiani', function ($command) {
            Preset::install();
            $command->info('Laravel+Vue preset has been installed...woohoo!');
        });
    }
}
