<?php
/**
 * Created by PhpStorm.
 * User: dkarimi
 * Date: 3/18/2019
 * Time: 10:30 AM
 */

namespace App\Http\Traits;


class Validator {
    public function validate($expected) {
        foreach ($expected as $key=> $value) {
            if (request()->has($value))
                return [
                    'success'    => false,
                    'detail'    => $value .' is required',
                ];
        }

        return [
            'success'    => true
        ];
    }
}