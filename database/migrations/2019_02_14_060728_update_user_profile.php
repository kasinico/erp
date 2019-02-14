<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUserProfile extends Migration
{
    /**
     * Run the migrations.
     *
     * Add is_super_user default value
     * Add middle_name column
     * @return void
     */
    public function up() {
        Schema::table('user_profiles', function (Blueprint $table) {
            $table->boolean('is_super_user')->nullable()->change();
            $table->string('middle_name', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
