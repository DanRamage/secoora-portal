java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://tds.secoora.org/thredds/catalog_hfradar.xml -num 1 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usc
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://tds.secoora.org/thredds/catalog_hfradar.xml -num 3 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usc
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://tds.secoora.org/thredds/catalog_platforms.xml -num 1 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usc
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://tds.secoora.org/thredds/catalog_platforms.xml -num 10 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usc
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://tds.secoora.org/thredds/catalog.xml -num 3 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usc

#/usr/bin/python /usr/local/userapps/secoora-portal/secoora/manage.py cswMaintain --UpdateMetadata --MetadataIniFile=/usr/local/userapps/secoora-portal/secoora/general/management/commands/usc_metadata_file_list.ini
