@extends('layouts.app')

@section('sidebar')
    @include('component.sidebar ')
@endsection

@section('header')
    @include('component.header')
@endsection


@section('product')
    @include("component.product")
@endsection

@section('home')
    @include("component.home")
@endsection

@section('addproduct')
    @include("component.addproduct")
@endsection

@section('category')
    @include("component.category")
@endsection
