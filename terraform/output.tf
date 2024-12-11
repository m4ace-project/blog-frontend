output "s3_bucket" {
  value = aws_s3_bucket.m-trend-app.id
}

output "bucket_regional_domain_name" {
  value = aws_s3_bucket.m-trend-app.bucket_regional_domain_name
}
#hhterr
