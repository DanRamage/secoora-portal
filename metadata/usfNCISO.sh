java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://crow.marine.usf.edu:8080/thredds/catalog.xml -num 1 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usf
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://crow.marine.usf.edu:8080/thredds/catalog.xml -num 2 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usf
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://crow.marine.usf.edu:8080/thredds/catalog/WFS_ROMS_NF_model/catalog.html -num 2 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usf
java -Xms1024m -Xmx1024m -jar ncISO-2.3.jar -custom true -xsl UnidataDD2MI.xsl -ts http://crow.marine.usf.edu:8080/thredds/catalog/WFS_ROMS_NF_model/catalog.xml -num 2 -depth 20 -iso true -waf /usr/local/userapps/secoora-portal/metadata/xml/usf


/usr/bin/python /usr/local/userapps/secoora-portal/secoora/manage.py cswMaintain --UpdateMetadata --MetadataIniFile=/usr/local/userapps/secoora-portal/secoora/general/management/commands/usf_metadata_file_list.ini