#!/bin/bash


/usr/bin/python /usr/local/userapps/secoora-portal/secoora/manage.py updateMetadata --UpdateTimeSteps --RemoteSensingLayers="HF Radar - Miami (UM),HF Radar - Outer Banks (UNC),Interpolated Sea Surface Temperature,MODIS Chlorophyll,MODIS Cloud Cover,Sea Surface Temperature(MODIS)"> /tmp/UpdateTimeSteps.log 2>&1