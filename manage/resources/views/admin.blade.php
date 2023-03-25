@extends('layouts.app')


@section('sidebar')
    @include('component.sidebar ')
@endsection

@section('header')
    @include('component.header')
@endsection


@section("$id")
    @include("component.$id")
@endsection




