---
layout: post
comments: true
title: "[PHP] Migrations in Laravel"
tags: [programming, php, laravel, back-end, technology, migrations, sql, databases]
img: ['laravel.png']
cover: 'command-line.png'
---

Migrations have the role of tracking all changes we need to make in our databases since the moment of its creation. It’s pretty much described by Laravel as a version control.

```
php artisan make:migration <name>
```

Appropriate names range from **add_table_mynewtable** to **add_newfield_to_existingtable** and help identify the reason why this migration exists.

This will create a new migration file. Essentially, it contains two functions: up and down. Up is the actual change you’d like to make, while down is supposed to have the backwards operation you’d use to rollback to previous state.

What goes in the up/down function depends on what you want to do. In case you need a new table, use Schema::create('new_table_name', function(Blueprint $table)). If you're adding new fields to an existing table, use Scheema::table('existing_table_name', function(Blueprint $table)).

The parameter $table is what allows you to create the attributes.

To **apply the migration**, run the following command:

```
php artisan migrate
```

Now to **rollback**:

```
php artisan migrate:rollback
```

**[Official reference](https://laravel.com/docs/5.5/migrations)**

**[Data types](https://laravel.com/docs/5.5/migrations#creating-columns)**

**[Primary key](https://laravel.com/docs/5.5/migrations#creating-indexes)**

```php
$table->increments('id');
```

**[Foreign keys](https://laravel.com/docs/5.5/migrations#foreign-key-constraints)**

### Snippet for creating a new table

```php
<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class AddConstraintMyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('myTable', function (Blueprint $table) {
           $table->unique('link');
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('myTable', function (Blueprint $table) {
            $table->dropUnique('offers_link_unique');
        });
    }
}
?>
```

[This snippet on Github Gist](https://gist.github.com/anazard/47b3af3f1fa3de6c5cbfbeffd16da990)

Notice how the migration is done in the up function and its counterpart down. Laravel chooses a reasonable name for the index, therefore it has to be used in order to be rolled back. Otherwise, you’ll get an error when trying to undo your last migration.

The following line is responsible for creating two timestamp fields, created_at and updated_at, making it easier to track changes in your data.

```php
$table->timestamps();
```