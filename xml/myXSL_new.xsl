<?xml version="1.0" encoding="utf-8" standalone="yes"?>

<xsl:stylesheet 
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
    xmlns:aid="http://ns.adobe.com/AdobeInDesign/4.0/"
    xmlns:aid5="http://ns.adobe.com/AdobeInDesign/5.0/"
    exclude-result-prefixes="xs">
    
    <xsl:output indent="yes" encoding="UTF-8" standalone="yes" />

    <xsl:template match="/newspaper/apartments">
        <newspaper>
            <apartments>
                <xsl:element name="{@MainName}">
                    <xsl:apply-templates select="Item"/>
                </xsl:element>
            </apartments>
        </newspaper>
    </xsl:template>
    
    <xsl:template match="/newspaper/cars">
        <newspaper>
            <cars>
                <xsl:element name="{@MainName}">
                    <xsl:apply-templates select="Item"/>
                </xsl:element>
            </cars>
        </newspaper>
    </xsl:template>

    <xsl:template match="Item">
        <xsl:if test="@name ='priorityAd'">
            <Priority aid:pstyle ="priorityAd">
    <Priority_Table aid:table="table" aid:trows="1" aid:tcols="1" aid5:tablestyle="myTableStyle">
     <cell aid:table="cell" aid:crows="1" aid:ccols="1" aid:ccolwidth ="119" aid5:cellstyle="Priority" aid:pstyle ="priorityAd">
      <xsl:if test="b">
       <b aid:cstyle = "boldIndex">
        <xsl:value-of select="b" />
       </b>
                        </xsl:if>
                        <xsl:value-of select="text()" />
                    </cell>
                </Priority_Table>
    <xsl:text>&#x2029;</xsl:text>
            </Priority>
        </xsl:if>

  <xsl:if test="@name ='adtext'">
   <free aid:pstyle ="adtext">
    <xsl:if test="b">
     <b aid:cstyle = "boldIndex">
      <xsl:value-of select="b" />
     </b>
    </xsl:if>
    <Itemtext>
     <xsl:value-of select="text()" />
    </Itemtext>
   </free>
   <xsl:text>&#x2029;</xsl:text> 
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>