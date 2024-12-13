resource "aws_s3_bucket" "m-trend-app" {
  bucket = var.bucket_name

  tags = {
    Name = "${var.project}-${var.environment}-bucket"

  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_s3_bucket_versioning" "versioning_example" {
  bucket = aws_s3_bucket.m-trend-app.id
  versioning_configuration {
    status = "Enabled"
  }
}

 resource "aws_s3_bucket_acl" "bucket_acl" {
     bucket = aws_s3_bucket.m-trend-app.id
     acl    = "public-read"
 }

resource "aws_s3_bucket_public_access_block" "m-trend-app-public_access" {
    bucket = aws_s3_bucket.m-trend-app.id
    block_public_acls       = false
    block_public_policy     = false
    ignore_public_acls      = false
    restrict_public_buckets = false
}

module "template_files" {
   source = "hashicorp/dir/template"
   base_dir = "${path.module}/blog-frontend"
 }


resource "aws_s3_bucket_policy" "bucket_policy" {
    bucket = aws_s3_bucket.m-trend-app.id
    policy = jsonencode({
         "Version": "2012-10-17",
         "Statement": [
            {
                "Sid": "Statement1",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:*",
                "Resource": "arn:aws:s3:::${var.bucket_name}/*"
            }
        ]
    })
}

resource "aws_iam_role" "iam-role" {
  name = "m-trend-app-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com" # Example service that can assume this role
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy" "s3_policy" {
  name   = "m-trend-app-s3-policy"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = "s3:PutObject"
        Resource = "arn:aws:s3:::m-trend-app/*"
      }
    ]
  })
}


resource "aws_s3_bucket_policy" "bucket_policy2" {
    bucket = aws_s3_bucket.m-trend-app.id
    policy = jsonencode({
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::${var.bucket_name}",
        "arn:aws:s3:::${var.bucket_name}/*"
      ]
    }
  ]
    })
}

resource "aws_s3_bucket_website_configuration" "bucket_hosting_config" {
    bucket = aws_s3_bucket.m-trend-app.id

  index_document {
    suffix = "index.html"
  }


}

# //files to be sent to the s3 bucket
# resource "aws_s3_object" "blog-frontend" {
#     bucket = aws_s3_bucket.m-trend-app.id

#     //Takes all files from build
#     for_each = module.blog-frontend.files
#     key    = each.key
#     source = each.value.source_path

#     content_type = each.value.content_type

#     content = each.value.content

#     The filemd5() function is available in Terraform 0.11.12 and later
#     For Terraform 0.11.11 and earlier, use the md5() function and the file() function:::
#     etag = "${md5(file("path/to/file"))}"
#    etag = each.value.digests.md5
# }



#this code for uploading content to s3 is same as the one above, 
#but this is a newer version on writing the code
# resource "aws_s3_object" "blog-frontend" {
#   bucket = aws_s3_bucket.m-trend-app.id

#   // Loops over all files defined in module.blog-frontend.files
#   for_each = module.blog-frontend.files

#   key          = each.key                            # S3 key (filename or path in the bucket)
#   source       = each.value.source_path             # Local file path
#   content_type = each.value.content_type            # Content type (e.g., text/html, image/png)
  
#   # Optional: Specify file content directly (useful for dynamic files)
#   content = each.value.content

#  ## # Ensure S3 object integrity using the MD5 checksum
#   etag = each.value.digests.md5
# }

#iam role to allow object upload to s3 bucket
# resource "aws_iam_role_policy_attachment" "attach_s3_policy" {
#   role       = aws_iam_role.iam-role.name
#   policy_arn = aws_iam_policy.s3_policy.arn
# }ss




