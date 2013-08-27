#!/usr/bin/env ruby
#encoding: UTF-8

require 'sinatra'




configure(:production){p "RUNNING IN ****____PRODUCTION___**** ENVIRONMENT" }
configure(:development){ p "RUNNING IN DEVELOPMENT ENVIRONMENT" }




get '/' do 
  "Hello world"
 
end
