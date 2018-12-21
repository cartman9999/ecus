<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function getDays()
    {
        $today = Carbon::now()->toDateString();
        \Log::info('HOY');
        \Log::info($today);

        $contador = 0;

        $usd_mxn[0] = ["Fecha" , "Cambio USD-MXN"];

        while($contador < 7) {
            $resta = 7 - $contador;
            $date = Carbon::now()->subDays($resta)->toDateString();

            $json = file_get_contents("https://free.currencyconverterapi.com/api/v6/convert?q=USD_MXN,MXN_USD&compact=ultra&date=" . $date);
            $obj = json_decode($json, true);

            $usd_mxn[$contador+1] = [$date , $obj['USD_MXN'][$date]];

            $contador++;
            \Log::info('Aumenta dia');
            \Log::info($date);

            \Log::info('RESPUESTA API');
            \Log::info($obj);
            \Log::info('Arreglo');
            \Log::info($usd_mxn);
        }

        return $usd_mxn;
    }

}
