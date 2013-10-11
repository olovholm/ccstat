#!/usr/bin/env ruby
#encoding: UTF-8

require 'sinatra'
require 'rubygems'
require 'csv'
require 'json'



configure(:production){p "RUNNING IN ****____PRODUCTION___**** ENVIRONMENT" }
configure(:development){ p "RUNNING IN DEVELOPMENT ENVIRONMENT" }




get '/' do 
  erb :index
end


get '/form' do 
  erb :form
end

get '/d3' do 
  erb :d3	
end

get '/streamtime' do
  
end

get '/helloworld' do 
  erb :d3
  
end


get '/data/*.json' do
  # Set in the data files and the arguments used to retrieve them here. 
  datasets = {
    streampercent: "search_client_dist.csv",
    searchpercent: "streams_client_dist.csv",
    barchart: "random_bar_num.csv"
  }
  
  
  puts "SOMEONE ASKED FOR: #{params[:splat]}"
  
  
  datasource = datasets[params[:splat][0].to_sym]
  puts "DATASOURCE: #{datasource}"

  begin  
    file = File.open("assets/data/#{datasource}","r")
    CSV.parse(file, {:col_sep => ';'}).to_json
  rescue
    status 404 # Not found
  end
end



=begin
get '/bilde02.png' do
  puts "Test test work to route"
  png = ChunkyPNG::Image.new(200,400, ChunkyPNG::Color::TRANSPARENT)
  (1...200).each do |x|
    (1...400).each do |y|
      png[x,y] = ChunkyPNG::Color.rgba(10, 20, 30, 128) unless y % 2 == 0
    end
  end
  response.headers['content_type'] = "application/octet-stream"
  puts "Getting ready to return: #{png.to_blob}"
  response.write(png.to_blob)
  
end

=end
