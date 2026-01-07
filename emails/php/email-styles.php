<?php
$primary_color = $primary_color ?? '#0C4A6E';
$accent_color = $accent_color ?? '#0369A1';
$bg_color = $bg_color ?? '#F0F9FF';
$card_color = $card_color ?? '#FFFFFF';
$text_color = $text_color ?? '#0F172A';
$muted_color = $muted_color ?? '#0284C7';
$border_color = $border_color ?? '#BAE6FD';
$header_bg_image = $header_bg_image ?? ((isset($site_url) && $site_url) ? ($site_url . '/footerbg.png') : '');
?>
<style type="text/css">
  body {
    margin: 0;
    padding: 0;
    background: <?php echo $bg_color; ?>;
    color: <?php echo $text_color; ?>;
    font-family: Arial, Helvetica, sans-serif;
  }
  table {
    border-collapse: collapse;
  }
  img {
    border: 0;
    display: block;
    line-height: 100%;
  }
  .preheader {
    display: none !important;
    visibility: hidden;
    opacity: 0;
    color: transparent;
    height: 0;
    width: 0;
    overflow: hidden;
    mso-hide: all;
  }
  .wrapper {
    width: 100%;
    background: <?php echo $bg_color; ?>;
    padding: 32px 12px;
  }
  .container {
    width: 100%;
    max-width: 640px;
    background: <?php echo $card_color; ?>;
    border: 1px solid <?php echo $border_color; ?>;
    border-radius: 18px;
    overflow: hidden;
  }
  .header {
    background-color: <?php echo $primary_color; ?>;
    color: #FFFFFF;
    padding: 15px 28px;
    position: relative;
    overflow: hidden;
  }
  .header-bg {
    position: absolute;
    inset: 0;
    background-image: url('<?php echo $header_bg_image; ?>');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(8px);
    transform: scale(1.08);
    opacity: 0.9;
  }
  .header-content {
    position: relative;
    z-index: 1;
  }
  .brand {
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
  }
  .brand-name {
    display: block;
    margin-top: 10px;
    letter-spacing: 0.4px;
  }
  .header-meta {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: right;
    color: rgba(255, 255, 255, 0.7);
  }
  .content {
    padding: 28px 32px 20px;
    font-size: 15px;
    line-height: 1.6;
  }
  .content h1 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 26px;
    margin: 0 0 16px;
    color: <?php echo $primary_color; ?>;
  }
  .content h2 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 20px;
    margin: 28px 0 12px;
    color: <?php echo $primary_color; ?>;
  }
  .content p {
    margin: 0 0 14px;
  }
  .note {
    background: #E0F2FE;
    border: 1px solid #7DD3FC;
    padding: 12px 14px;
    border-radius: 12px;
    font-size: 14px;
  }
  .details {
    width: 100%;
    margin: 18px 0 8px;
    border: 1px solid <?php echo $border_color; ?>;
    border-radius: 12px;
    overflow: hidden;
  }
  .order-details {
    width: 100%;
    margin: 18px 0 8px;
    border: 1px solid <?php echo $border_color; ?>;
    border-radius: 12px;
    overflow: hidden;
  }
  .order-details th,
  .order-details td {
    padding: 10px 14px;
    font-size: 14px;
    text-align: left;
  }
  .order-details th {
    background: #E0F2FE;
    width: 40%;
    color: <?php echo $muted_color; ?>;
  }
  .order-table-items-heading {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 18px;
    margin: 22px 0 10px;
    color: <?php echo $primary_color; ?>;
  }
  .order-table-items {
    width: 100%;
    margin: 12px 0 8px;
    border: 1px solid <?php echo $border_color; ?>;
    border-radius: 12px;
    overflow: hidden;
  }
  .order-table-items th,
  .order-table-items td {
    padding: 10px 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid <?php echo $border_color; ?>;
  }
  .order-table-items th {
    background: #E0F2FE;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.6px;
    color: <?php echo $muted_color; ?>;
  }
  .order-table-items tr:last-child td {
    border-bottom: none;
  }
  .order-table-items .column-number,
  .order-table-items .column-quantity {
    text-align: right;
  }
  .details td {
    padding: 10px 14px;
    font-size: 14px;
  }
  .detail-label {
    background: #E0F2FE;
    width: 40%;
    color: <?php echo $muted_color; ?>;
  }
  .detail-value {
    font-weight: 600;
  }
  .button {
    display: inline-block;
    background: <?php echo $accent_color; ?>;
    color: #FFFFFF !important;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 999px;
    font-weight: bold;
    margin-top: 8px;
  }
  .items-table {
    width: 100%;
    margin: 16px 0 8px;
    border: 1px solid <?php echo $border_color; ?>;
    border-radius: 12px;
    overflow: hidden;
  }
  .items-table th,
  .items-table td {
    padding: 10px 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid <?php echo $border_color; ?>;
  }
  .items-table th {
    background: #E0F2FE;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.6px;
    color: <?php echo $muted_color; ?>;
  }
  .items-table tr:last-child td {
    border-bottom: none;
  }
  .items-total {
    text-align: right;
    font-weight: bold;
  }
  .footer {
    padding: 20px 32px 28px;
    background: #E0F2FE;
    color: <?php echo $muted_color; ?>;
    font-size: 12px;
  }
  .footer a {
    color: <?php echo $primary_color; ?>;
  }
  .muted {
    color: <?php echo $muted_color; ?>;
  }
  @media only screen and (max-width: 620px) {
    .content,
    .footer,
    .header {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .container {
      border-radius: 12px;
    }
    .header-meta {
      display: none !important;
    }
  }
</style>
